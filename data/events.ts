export interface EventItem {
    title: string;
    date: string;
    category: string;
    description: string;
  }
  
  export const events: EventItem[] = [
    {
      title: 'Spring Festival Fundraiser',
      date: '2025-03-25',
      category: 'fundraisers',
      description: 'Celebrate the arrival of spring with a festival featuring music, food, and activities for all ages, with proceeds going to local charities.'
    },
    {
      title: 'Neighborhood Park Cleanup',
      date: '2025-04-12',
      category: 'cleanups',
      description: 'Help us keep our local parks beautiful by joining our community cleanup event. Gloves and supplies provided.'
    }
    // ... include all your other event items here ...
  ];
  