const Get = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "All techstacks" });
};
