// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  // Redirect to the dashboard page
  window.location.href = '/dashboard.html';
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Redirecting to Dashboard...</h1>
        <p className="text-xl text-muted-foreground">
          <a href="/dashboard.html" className="text-primary underline">
            Click here if not redirected automatically
          </a>
        </p>
      </div>
    </div>
  );
};

export default Index;
