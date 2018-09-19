<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Sass - Partials

> Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

-------------------------------------------------------------------------------
## Zadania do samodzielnego wykonania


### Zadanie 1. Organizacja projektu  (~ 10min - 15min)
Stwórz potrzebne foldery i pliki i zorganizuj  według schematu poniżej.
Umieść przykłądowe style według opisu

```
[folder] sass
    [folder] modules
                _all.scss - zmienne przechowujące rozmiar czcionki lub szerokości
                _colors.scss - zmienne z kolorami
    [folder] partials
                _footer.scss - style dla elementu footer, wykorzystaj wcześniej zdefiniowane zmienne
                _header.scss - style dla elementu header, wykorzystaj wczesniej zdefiniowane zmienne
                _base.scss - style dla całej strony, np. elementu h1, article, p
    main.scss - tylko importy wcześniej stworzonych plików
```
Przeglądarka powinna wysłać tylko jedno zapytanie do serwera dotyczące plików CSS (Pamiętaj o podkreśleniach w nazwach plików).
Upewnij się, że każdy plik jest obserwowany przez watcher w gulpie. Jeśli nie jesteś pewien zapytaj wykładowcę.
