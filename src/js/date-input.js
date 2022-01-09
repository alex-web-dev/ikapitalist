import datepicker from 'js-datepicker';

window.addEventListener('load', () => {
  const dateInput = document.querySelector('.field__input_date');
  if (dateInput) {
    const picker = datepicker('.field__input_date', {
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