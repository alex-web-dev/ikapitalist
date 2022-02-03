import datepicker from 'js-datepicker';

const $calendar = document.querySelector('.calendar');
if ($calendar) {
	console.log($calendar);
	const $calendarInput = $calendar.querySelector('.calendar__input');

	const picker = datepicker($calendarInput, {
		alwaysShow: true,
		customMonths: [
			'Январь',
			'Февраль',
			'Март',
			'Апрель',
			'Май',
			'Июнь',
			'Июль',
			'Август',
			'Сентябрь',
			'Октябрь',
			'Ноябрь',
			'Декабрь'
		],
		customDays: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString()
			input.value = value
		},
		onSelect: () => showEvent($calendar),
		onShow: (datePicker) => addCalendarEvents(datePicker, $calendar),
		onMonthChange: (datePicker) => addCalendarEvents(datePicker, $calendar)
	});
}

window.addEventListener('click', hideActiveEvent);
window.addEventListener('resize', hideActiveEvent)

function addCalendarEvents(datePicker, $calendar) {
	const $events = $calendar.querySelectorAll('.calendar__event');
	$events.forEach($event => {
	const date = new Date(Date.parse($event.dataset.date));
	const day = date.getDate();
		const month = date.getMonth();
		if (datePicker.currentMonth !== month) {
			return;
		}

		setTimeout(() => {
			const $days = $calendar.querySelectorAll('.qs-num');
			$days.forEach($num => {
				const value = parseInt($num.innerHTML);
				if (value === day) {
					$num.classList.add('qs-num-event');
					$num.setAttribute('data-event-date', $event.dataset.date);
				}
			});
		}, 100);
	});
}

function showEvent($calendar) {
	const $activeNum = document.querySelector('.qs-num-event.qs-active');

	if (!$activeNum) {
		return;
	}


	const numClientRect = $activeNum.getBoundingClientRect();
	const numOffset = { 
			top: numClientRect.top + window.scrollY, 
			left: numClientRect.left + window.scrollX, 
	};

	const calendarClientRect = $calendar.getBoundingClientRect();
	const calendarOffset = { 
			top: calendarClientRect.top + window.scrollY, 
			left: calendarClientRect.left + window.scrollX, 
	};

	const date = $activeNum.dataset.eventDate;


	setTimeout(() => {
		const $event = document.querySelector(`.calendar__event[data-date="${date}"]`);
		$event.classList.add('calendar__event_active');

		const eventOffset = {
			top: numOffset.top - calendarOffset.top - $event.offsetHeight - $activeNum.offsetHeight / 2 + 5,
			left: numOffset.left - calendarOffset.left - $event.offsetWidth / 2 + $activeNum.offsetWidth / 2,
		}

		$event.style.top = `${eventOffset.top}px`;
		$event.style.left = `${eventOffset.left}px`;
	}, 10);
}

function hideActiveEvent() {
	const $activeEvent = document.querySelector('.calendar__event_active');
	if ($activeEvent) {		
		$activeEvent.classList.remove('calendar__event_active');
	}
}