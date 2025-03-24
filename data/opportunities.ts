export interface Opportunity {
    title: string;
    description: string;
    date: string;
    type: string;
  }
  
  export const opportunities: Opportunity[] = [
    {
      title: "Homeless Shelter Meal Prep",
      description: "Join us in preparing meals for homeless individuals in our community. Every meal counts!",
      date: "10-02-2025 | 9:00 AM - 1:00 PM",
      type: "Fundraiser"
    },
    {
      title: "Urban Garden Building",
      description: "Help build an urban garden to promote local food production and environmental sustainability.",
      date: "20-03-2025 | 8:00 AM - 2:00 PM",
      type: "Cleanup"
    }
    // ... include the rest of your opportunities here ...
  ];
  