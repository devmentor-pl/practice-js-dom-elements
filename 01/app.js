const elementList = document.querySelector('.comments__item.comments__item--newest');

if (elementList  !== null){ // Wykonuje tylko wtedy kiedy element został znaleziony
    
    const elementNewest = elementList.querySelectorAll('[data-info'); 

    console.log(`Wszystkich elementów posiadających atrybut "data-info" oraz dwie klasy (comments__item, comments__item--newest) jest ${elementNewest.length}.`); // lenght - ilość elementów w tablicy zwrucona wartość to obiekt typu NodeList str. 22
} else{
    console.log('Elementów które posiadają atrybut "data-info" NIE ZNALEZIONO');
}
