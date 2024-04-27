export function GET(request: any) {
  return {
    status: 200,
    body: {
      data: {
        title: "Tech Stack",
        subtitle: "All technologies I've used across my projects",
      },
    },
  };
}
