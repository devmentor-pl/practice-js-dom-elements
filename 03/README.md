> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e04-js-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#03` JavaScript: Elementy DOM

W pliku `./app.js` znajdziesz obiekt, który określa ustawienia dla `buttona`:

```
const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}
```

Utwórz element `<button/>`, który:
- zgodnie z powyższymi wytycznymi będzie posiadał odpowiednie atrybuty, style i tekst; do stworzenia tego obiektu (elementu HTML) spróbuj wykorzystać pętlę, np.  [for...in](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Polecenia/for...in),
- zostanie wstawiony do elementu o klasie `.parent-for-button` przy pomocy JavaScriptu.

Pamiętaj, aby ten przycisk był widoczny na stronie.

&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-js-dom-elements/)*

> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:
