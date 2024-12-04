# Ziel des heutigen Tages: Das User-Backend auf den aktuellen Stand bringen!

1. Endpunkte (kannst du bei belieben auch anders benennen):

- GET /user --> wirft alle User aus
- POST /user --> fügt einen User hinzu
- GET /user/:id --> gibt Informationen von bestimmten Unser zurück
- PATCH /user/:id --> editiert User mit bestimmter ID
- DELETE /user/:id --> löscht bestimmten User

2. Middleware:

app.use(logger) --> selbst geschrieben oder app.use(morgan("dev"))--> third Party
app.use("\*", invalidRoute)
app.use(errorHandler)

3. Struktur: Nutze Router und Controller um den Code zu strukturieren
