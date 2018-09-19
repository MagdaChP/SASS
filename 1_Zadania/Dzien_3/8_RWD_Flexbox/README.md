<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# RWD &ndash; Flexbox

> Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

## Zadanie rozwiązywane z wykładowcą

### Flexbox - layout (~ 7min - 12min)

W pliku `index.html` znajdziesz element `article`. Ustaw poszczególne elementy `div` zgodnie z poniższym przykładem. Użyj flexboxa.

![Flexbox](images/flex.png)
-------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania

### Zadanie 1. Flexbox  (~ 5min - 10min)
W pliku `index.html` znajdziesz listę o nazwie `list`. Za pomocą flexboxa wykonaj następujące polecenia:
* ustaw listę o **klasie** ```list``` na środku strony.
* ustaw elementy listy obok siebie.


### Zadanie 2. Flexbox &ndash; elementy (~ 15min - 20min)
W pliku `index.html` znajdziesz sekcję o nazwie `circles`.
Użyj flexboxa do następującego ustawienia sześciu kółek:

![Flexbox](images/flex1.jpg)

Kółka przy mniejszej szerokości ekranu powinny automatycznie spadać pod siebie. Przykład wyżej pokazuje, że jedno kółko się nie mieści w viewporcie i dlatego spada w dół. Stwórz mixin dla prefiksów flexboksa.
Pamiętaj o numeracji kółek, które mają być wycentrowane w poziomie i pionie.

### Zadanie 3. Flexbox &ndash; kolejność elementów (~ 25min - 30min)
W pliku `index.html` znajdziesz sekcję o nazwie `crazy-layout`.
W podanej sekcji jest utworzony układ, który znasz z grida - ułatwi on wykonanie zadania.
Pamiętaj o odpowiednim zagnieżdżaniu klas.
Użyj flexboksa do odwzorowania poniższego layoutu. Zwróć uwagę na kolejność elementów w wersji na telefon.
Ogranicz ustawianie `width` elementów - szerokością elementów powinien zajmować się flexbox (tylko element `10` powinien mieć ustawioną szerokość w pewnym przypadku ;).

![order](images/flex-layout-fullscreen.jpg)

Następnie dodaj breakpoint, który sprawi, że na telefonie (do 460px) widok będzie taki:

![order](images/flex-layout-mobile.jpg)
