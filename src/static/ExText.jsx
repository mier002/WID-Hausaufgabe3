export const Aufgabe = () => (
  <div className="Exercise">
    <p>
      Implementiere ein einfaches Spiel bei dem zwei Spieler:innen gegeneinander
      würfeln. Das Bild zeigt wie die kleine App am Ende aussehen soll. Du
      kannst Stile aus der app.css Datei übernehmen, evtl. sind aber Anpassungen
      nötig.
    </p>
    <p>
      <span className="Emphasis">Hinweis:</span> Du benötigst für diese Aufgabe
      keinen komplexen State (Objekte oder Arrays). Falls du die Aufgabe aber
      gerne etwas schwieriger machen möchtest, kannst du mehrere useStateHooks
      zusammenfassen und Daten in einem Objekt speichern.
    </p>
    <h4>Teil 1 (siehe oberes Bild):</h4>
    <p>
      1) Zunächst sollen sich die beiden Spieler:innen mit einem Namen
      registrieren. Verwende dazu für jede Partei ein Eingabefeld (und jeweils
      einen useState-Hook sowie onChange-Event Handler).
    </p>
    <p>
      2) Füge einen "Registrieren" Button hinzu, mithilfe dessen die beiden
      Namen in ein div- oder span-Element zur Anzeige geschrieben wird (im Bild
      Player1 vs Player2). Nutze einen weiteren useStateHook, der die beiden
      Namen ausliest und den String für die Anzeige speichert. Du kannst dafür
      z.B. Template Strings nutzen (siehe Links in Aufgabe.md).
    </p>
    <p>
      3) Der Button soll deaktiviert sein, wenn eines oder beide Eingabefelder
      leer sind. Nutze das "disabled"-Attribut (Datentyp: boolean) für den
      Button und vergleiche gegen leere Strings. Füge fürs Styling
      className="Button" dem button-Element hinzu, die Deklaration enthält auch
      Anweisungen wie der inaktive Button zu stylen ist.
    </p>
    <h4>Teil 2 (siehe unteres Bild):</h4>
    <p>
      4) Implementiere den "Würfeln" Button. Mit jedem Klick wird alternierend
      gewürfelt - Partei 1 zuerst, dann Partei 2, dann wieder 1 usw. Du
      benötigst dazu 3 State Hooks - jeweils einen (1) pro Partei (der das
      Ergebnis dem jeweiligen persönlichen Spielstand hinzufügt) sowie einen
      weiteren, der die Runden zählt und (konditionell) entscheidet, welche
      Partei an der Reihe ist. Du kannst dazu den Remainder-Operator (siehe
      Links Aufgabe.md) nutzen, und testen ob es eine gerade oder ungerade Runde
      ist. Zum Würfeln kannst du folgende Funktion verwenden:{" "}
      <span className="Emphasis">Math.floor(Math.random() * 6) + 1</span> Gebe
      das Ergebnis wie in 2 in einer Anzeige aus, die auf den State (Score) der
      beiden Spieler:innen zurückgreift.
    </p>
    <p>
      5) Das Spiel soll nach 3 Runden (nach insgesamt 6 Mal würfeln) enden. Du
      kannst den Runden-Counter (siehe 4) verwenden und darauf basierend den
      "Würfeln" - Button deaktivieren (mit "disabled"-Attribut).
    </p>
    <p>
      6) Füge einen weiteren Button hinzu, der ein neues Spiel startet. Dazu
      sollte jeder State zurückgesetzt werden und der deaktivierte
      "Würfeln"-Button nun wieder klickbar sein.
    </p>
    <p>7) Teste deine App auf mögliche Fehler. Hast du etwas übersehen?</p>
  </div>
);
