export function startServer() {
  app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
  });
}
