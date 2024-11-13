# User-Backend :computer:

#### Letzte Woche habt ihr angefangen ein User-Backend aufzubauen und stetig auszubauen. #### In diesem sollen nun auch die neusten Konzepte integriert werden.
#### Ihr solltet also am Ende des morgigen Tages ein Backend haben, welches (mindestens) #### folgende Dinge beinhaltet:

1. Endpunkte (kannst du bei belieben auch anders benennen):
   GET /user --> wirft alle User aus
   POST /user --> fügt einen User hinzu
   GET /user/:id --> gibt Informationen von bestimmten Unser zurück
   PATCH /user/:id --> editiert User mit bestimmter ID
   DELETE /user/:id --> löscht bestimmten User

2. Middleware:
   app.use(logger) --> selbst geschrieben oder app.use(morgan("dev") --> third Party
   app.use("\*", invalidRoute) --> kann heute vorerst einfach eine Message zurücksenden, wie zum Beispiel:`Combination of path "${req.originalUrl}" and method "${req.method}" not found.` . Wird ab morgen dann einen entsprechenden Fehler weitergeben.
   app.use(errorHandler) --> bearbeiten wir morgen im Unterricht und ist anschließend einzupflegen

3. Struktur: Nutze Router und Controller um den Code zu strukturieren
   :warning: Dieses Backend-Projekt werden wir künftig benötigen und noch weiter ausbauen (Datenbank und co.). Außerdem könnt ihr dieses Backend dann so in jedem zukünftigen Projekt (inkl. Final Project und co.) implementieren.
