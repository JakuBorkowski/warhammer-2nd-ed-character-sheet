PRACA W TOKU

Aplikacja ma na celu zmechanizowanie systemu Warhamer 2ed, ułatwienie GM prowadzenie sesji.

-odwzorowanie wyglądu tradycyjnej karty postaci

![image](https://user-images.githubusercontent.com/95879071/157023929-3ca7358f-2c3e-43d7-b114-2f916d57e268.png)


podczas odwzorowywania wyglądu tradycyjnej karty zauważyłem niedogodności jakie mogą wynikać dla użytkownika aplikacji, aby poprawić "user experience" konieczne będą zmiany interfejsu w dalszym etapie prac nad aplikacją aby był przejżysty.

-zmechanizowanie tradycyjnych rzutów kością

obecnie trwają pracę nad zmechanizowaniem działu "cechy", cechy główne działają w zamierzony sposób.
![image](https://user-images.githubusercontent.com/95879071/157027487-da267806-4f81-444f-99e6-42e49b5b073f.png)
obecnie wprowadzone do karty postaci dane są wstawione ręcznie tylko w celu prezentacji, docelowo mają być pobierane z serwera.

dane pobierane są z providera i przekazywane dalej przy pomocy props, na obecną chwilę użycie providera może wydawać się zbędnym zabiegiem ponieważ pozwala ono zaledwie na pominięcie jednego z dzieci, dane jakie w providerze sie znajdują w przyszłości będą przekazywane też do innych elementów aplikacji, uznałem za rozsądne providera przygotować już na tym etapie

sam provider wraz z danymi został stworzony w odzielnnym pliku aby kod wyglądał czyściej
![image](https://user-images.githubusercontent.com/95879071/157030044-1d85f5be-47d5-4abf-8dea-43a4a6ecaf60.png)
dane to 48 zmiennych (stanów utworzonych przy pomocy useState()) oraz funkcje do ich edytowania, dane będą używane oraz zmieniane na różnych etapach używania aplikacji, podczas tworzenia postaci, rozwoju (awansu) , samej rozgrywki.

![image](https://user-images.githubusercontent.com/95879071/157030839-0fd3c8d9-5007-45b9-883e-01fa11a7960b.png)

w komponencie "Consumer" o nazwie CharacterProfileElements przypisuje do zmiennej heroStats dane z providera zaś następnie przpisuje je do poszczególnych elementów.

elementów mamy aż 48 dlatego aby nie tworzyć ich ręcznie robi to za nas metoda maps() oraz uniwersalne komponenty
na pierwszym etapie przekazuję informacje na temat trzech różnych zmiennych, każdy z nich spełnia inne zadanie dlatego konieczne jest aby móc przetworzyć je dalej
celem końcowym jest zaznaczony na poniższym obrazku czerwonym prostokątem element 

![image](https://user-images.githubusercontent.com/95879071/157032775-f4a0f539-1a71-4f7e-834e-18ef21845b7b.png)

proszę zauważyć że ID przekazywane podczas map() rośnie co 2 i odpowiada pozycji wartości właściwości w tabeli jaką przekazuje provider
![image](https://user-images.githubusercontent.com/95879071/157033144-03e96c05-f508-485d-9cc2-9eb7008ee393.png)
każdej właściwości towarzyszy funkcją ją zmieniająca znadująca sie na pozycji o jeden wyższej niż sama wartość.

w kolejnym komponencie wartości i funkcje są przypisywane do konkretnych guzików <button>, wartość satej się widoczna 'nazwą' po kliknieciu pojawia się nowy komponent który pozwala 'obsłużyć' wartość zgodnie z jej ostatecznym przeznaczeniem 
![image](https://user-images.githubusercontent.com/95879071/157035740-08d69626-c43a-45cb-b3d4-d4dff05bca8d.png)
![image](https://user-images.githubusercontent.com/95879071/157036075-e0df08bd-830b-47d9-b2a2-05f9636618ae.png)

używając guzika z linni "Początkowa" ustawiamy statystykę z ją zaczynamy grę
   z linni "Schemat rozwoju" jeśli obecna wartośc wynosi 0 ustalić nową wartośc, jeśli wyższa rozwinąć statystykę (zmiana widoczna w linni "Aktualna")
   z linni "Aktualna" doknać testu umiejętności (jeśli losowa liczba od 0-100 jest niższa od wartości statystyki test udany) w orginalnej grze postaci mogą z róznych powodów rzut może być utrudniony lub ułatwiony przez mistrza gry, funkcja modyfikatorów będzie rozwijana w dalszym etapie tworzenia aplikacji



-automatyczne zliczanie informacji które tradycyjnie trzeba było liczyć "ręcznie"
-zmechanizowanie walk
-dodanie panelu mistrza gry dzięki któremu będzie miał on dostęp do wszytskich danych w wygodnym interfejsie
-dodanie planszy

sam projekt jest dość duży i widzę w nim okazję do nauczenia sie wielu nowych rzeczy
