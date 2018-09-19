<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Sass - Logika

> Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

## Zadanie rozwiązywane z wykładowcą

### Interpolacja i logika (~ 10min - 15min)

Wstaw na stronie kilka nagłówków, np. od **h1** do **h4**. Zapisz za pomocą zmiennej wysokość linii i podstawowy rozmiar tekstu, a następnie zastosuj te style dla całego dokumentu.

Ostyluj nagłówki w taki sposób, aby na podstawie zdefiniowanego rozmiaru tekstu zmieniała się ich wielkość. Wykorzystaj pętle i interpolację.
Oblicz odpowiednio rozmiar każdego nagłówka, pamiętaj o ich hierarchii (**h1** powinien być największy).

Ustaw nagłówkom różne kolory.

Skorzystaj: http://sass-lang.com/documentation/Sass/Script/Functions.html

-------------------------------------------------------------------------------
## Zadania do samodzielnego wykonania

### Zadanie 1. Dzień i noc (~ 5min - 10min)

Stwórz zmienną o nazwie `timeOfDay`, do której wstaw informację jaka jest aktualnie pora dnia.
Nastepnie napisz mixin, za pomocą którego będzie można usawić tło strony w nastepujący sposób:
- jeśli pora dnia to 'morning' - ustaw kolor tła na orange
- jeśli pora dnia to 'midday' - ustaw kolor tła na yellow
- jeśli pora dnia to 'evening' - ustaw kolor tła na navy
- jeśli pora dnia to 'night' - ustaw kolor tła na black

Dodaj mixin do selektora `body`.

### Zadanie 2. Interpolacja i logika (~ 10min - 15min)

Za pomocą pętli określ kolor obramowania dla dziesięciu kontenerów np. elementów `div`. Niech kolor będzie pomarańczowy dla parzystych kontenerów, a niebieski dla nieparzystych.
Określ im **klasy** od ```block_1``` do ```block_10```. Wykorzystaj pętlę.
