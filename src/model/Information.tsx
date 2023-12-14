export interface InformationCreation {
  id: string;
  title: string;
  description: string;
  image?: string[];
  concern_levels?: string[];
  created_at: string;
  updated_at: string;
  status: "Active" | "Unvalid" | "Pending";
}
const generateRandomString = () => {
  return Math.random().toString(36).substring(7);
};

const generateRandomDate = () => {
  const startDate = new Date(2022, 0, 1); // January 1, 2022
  const endDate = new Date();
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return randomDate.toISOString();
};

const generateRandomStatus = (): "Active" | "Unvalid" | "Pending" => {
  const statuses: ("Active" | "Unvalid" | "Pending")[] = [
    "Active",
    "Unvalid",
    "Pending",
  ];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

const generateRandomObject = (): InformationCreation => {
  return {
    id: generateRandomString(),
    title: `Title-${generateRandomString()}`,
    description: `Description-${generateRandomString()}`,
    image: [generateRandomString(), generateRandomString()],
    concern_levels: [generateRandomString(), generateRandomString()],
    created_at: generateRandomDate(),
    updated_at: generateRandomDate(),
    status: generateRandomStatus()!,
  };
};

export const generateObjects = (count: number): InformationCreation[] => {
  const objects: InformationCreation[] = [];
  for (let i = 0; i < count; i++) {
    objects.push(generateRandomObject());
  }
  return objects;
};
