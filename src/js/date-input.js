import datepicker from 'js-datepicker';

window.addEventListener('load', () => {
  const dateInput = document.querySelector('.field__input_date');
  if (dateInput) {
    const picker = datepicker('.field__input_date', {
      // alwaysShow: true,
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
      }
    });
  }

  const calendar = document.querySelector('.calendar');
  if (calendar) {
    const picker = datepicker('.calendar__input', {
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
      }
    });
  }
});