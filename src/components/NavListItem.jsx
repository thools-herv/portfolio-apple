import NavLinkHover from "./NavLinkHover";

// 1. DATA CONFIGURATION: Ipunin dito lahat ng impormasyon ng mga panel.
const hoverMenusConfig = {
  storeHover: {
    titles: {
      first: "Shop",
      second: "Quick Links",
      third: "Shop Special Stores",
    },
    firstPanel: [
      { id: 1, title: "Shop the Latest" },
      { id: 2, title: "Mac" },
      { id: 3, title: "iPad" },
      { id: 4, title: "iPhone" },
      { id: 5, title: "Apple Watch" },
      { id: 6, title: "Apple Vision Pro" },
      { id: 7, title: "AirPods" },
      { id: 8, title: "Accessories" },
    ],
    secondPanel: [
      { id: 1, title: "Find a Store" },
      { id: 2, title: "Order Status" },
      { id: 3, title: "Apple Upgrade" },
      { id: 4, title: "Apple Trade In" },
      { id: 5, title: "Financing" },
      { id: 6, title: "Personal Setup" },
    ],
    thirdPanel: [
      { id: 1, title: "Certified Refurbushed" },
      { id: 2, title: "Education" },
      { id: 3, title: "Business" },
      { id: 4, title: "Veterans and Military" },
      { id: 5, title: "Government" },
    ],
  },

  macHover: {
    titles: {
      first: "Explore Mac",
      second: "Shop Mac",
      third: "More from Mac",
    },

    subTitles: {
      first: "Compare Mac",
      second: "Switch from PC to Mac",
    },

    firstPanel: [
      { id: 1, title: "Explore All Mac" },
      { id: 2, title: "MacBook Neo" },
      { id: 3, title: "MacBook Air" },
      { id: 4, title: "MacBook Pro" },
      { id: 5, title: "iMac" },
      { id: 6, title: "Mac mini" },
      { id: 7, title: "Displats" },
    ],
    secondPanel: [
      { id: 1, title: "Shop Mac" },
      { id: 2, title: "Help Me Choose" },
      { id: 3, title: "Mac Accessories" },
      { id: 4, title: "Apple Upgrade" },
      { id: 5, title: "Apple Trade In" },
      { id: 6, title: "Financing" },
      { id: 7, title: "Personal Setup" },
    ],
    thirdPanel: [
      { id: 1, title: "Mac Support" },
      { id: 2, title: "AppleCare" },
      { id: 3, title: "macOS 27" },
      { id: 4, title: "Apple Intelligence and Siri" },
      { id: 5, title: "Apps by Apple" },
      { id: 6, title: "Apple Creator Studio" },
      { id: 7, title: "Better with iPhone" },
      { id: 8, title: "iCloud+" },
      { id: 9, title: "Mac for Business" },
      { id: 10, title: "Education" },
      { id: 11, title: "Apple at Work" },
    ],
  },

  iPadHover: {
    titles: {
      first: "Explore iPad",
      second: "Shop iPad",
      third: "More from iPad",
    },

    subTitles: {
      first: "Compare iPad",
    },

    firstPanel: [
      { id: 1, title: "Explore All iPad" },
      { id: 2, title: "iPad Pro" },
      { id: 3, title: "iPad Air" },
      { id: 4, title: "iPad" },
      { id: 5, title: "iMac" },
      { id: 6, title: "iPad mini" },
      { id: 7, title: "Apple Pencil" },
      { id: 8, title: "Keyboards" },
    ],
    secondPanel: [
      { id: 1, title: "Shop iPad" },
      { id: 2, title: "iPad Accessories" },
      { id: 3, title: "Apple Upgrade" },
      { id: 4, title: "Apple Trade In" },
      { id: 5, title: "Financing" },
      { id: 6, title: "Personal Setup" },
    ],
    thirdPanel: [
      { id: 1, title: "iPad Support" },
      { id: 2, title: "AppleCare" },
      { id: 3, title: "iPadOS 27" },
      { id: 4, title: "Apple Intelligence and Siri" },
      { id: 5, title: "Apps by Apple" },
      { id: 6, title: "Apple Creator Studio" },
      { id: 7, title: "iCloud+" },
      { id: 8, title: "Education" },
      { id: 9, title: "Apple at Work" },
    ],
  },

  iPhoneHover: {
    titles: {
      first: "Explore iPhone",
      second: "Shop iPhone",
      third: "More from iPhone",
    },

    subTitles: {
      first: "Compare iPhone",
      second: "Switch from Android",
    },

    firstPanel: [
      { id: 1, title: "Explore All iPhone" },
      { id: 2, title: "iPhone Duo" },
      { id: 3, title: "iPhone 18 Pro" },
      { id: 4, title: "iPhone Air" },
      { id: 5, title: "iPhone 17" },
      { id: 6, title: "iPhone 17e" },
      { id: 7, title: "iPhone 16" },
    ],
    secondPanel: [
      { id: 1, title: "Shop iPhone" },
      { id: 2, title: "iPhone Accessories" },
      { id: 3, title: "Apple Upgrade" },
      { id: 4, title: "Apple Trade In" },
      { id: 5, title: "CArrier Deals at Apple" },
      { id: 6, title: "Financing" },
      { id: 7, title: "Personal Setup" },
    ],
    thirdPanel: [
      { id: 1, title: "iPhone Support" },
      { id: 2, title: "AppleCare" },
      { id: 3, title: "iOS 27" },
      { id: 4, title: "Apple Intelligence and Siri" },
      { id: 5, title: "Apps by Apple" },
      { id: 6, title: "iPhone Privacy" }, // Ginawa kong sunod-sunod ang id (dati ay may duplicate id: 5)
      { id: 7, title: "Better with Mac" },
      { id: 8, title: "iCloud+" },
      { id: 9, title: "Wallet, Pay, Card" },
      { id: 10, title: "Apple at Work" },
    ],
  },

  watchHover: {
    titles: {
      first: "Explore Watch",
      second: "Shop Watch",
      third: "More from Watch",
    },

    subTitles: {
      first: "Compare Watch",
      second: "Why Apple Watch",
    },

    firstPanel: [
      { id: 1, title: "Explore All Apple Watch" },
      { id: 2, title: "Apple Watch Series 12" },
      { id: 3, title: "Apple Watch Ultra 4" },
      { id: 4, title: "Apple Watch SE 3" },
      { id: 5, title: "Apple Watch Nike" },
      { id: 6, title: "Apple Watch Hermes" },
    ],
    secondPanel: [
      { id: 1, title: "Shop Apple Watch" },
      { id: 2, title: "Apple Watch Bands" },
      { id: 3, title: "Apple Watch Accessories" },
      { id: 4, title: "Apple Upgrade" },
      { id: 5, title: "Apple Trade In" },
      { id: 6, title: "Financing" },
      { id: 7, title: "Personal Setup" },
    ],
    thirdPanel: [
      { id: 1, title: "Apple Watch Support" },
      { id: 2, title: "AppleCare" },
      { id: 3, title: "watchOS 27" },
      { id: 4, title: "Apple Watch For Your Kids" },
      { id: 5, title: "Apps by Apple" },
      { id: 6, title: "Apple Fitness+" },
      { id: 7, title: "Education" },
    ],
  },

  visionHover: {
    titles: {
      first: "Explore Vision",
      second: "Shop Vision",
    },

    subTitles: {
      first: "Tech Specs",
    },

    firstPanel: [{ id: 1, title: "Explore All Apple Vision Pro" }],
    secondPanel: [
      { id: 1, title: "Shop Apple Vision Pro" },
      { id: 2, title: "Apple Vision Accessories" },
      { id: 3, title: "Book a Demo" },
      { id: 4, title: "Financing" },
      { id: 5, title: "Personal Setup" },
    ],
    thirdPanel: [
      { id: 1, title: "Apple Vision Pro Support" },
      { id: 2, title: "AppleCare" },
      { id: 3, title: "visionOS 27" },
      { id: 4, title: "Apple Vision Pro for Enterprise" },
    ],
  },

  airPodsHover: {
    titles: {
      first: "Explore AirPods",
      second: "Shop AirPods",
      third: "More from AirPods",
    },

    subTitles: {
      first: "Compare AirPods",
    },

    firstPanel: [
      { id: 1, title: "Explore All AirPods" },
      { id: 2, title: "AirPods 5" },
      { id: 3, title: "AirPods Pro 3" },
      { id: 4, title: "AirPods Max 2" },
    ],
    secondPanel: [
      { id: 1, title: "Shop Apple AirPods 5" },
      { id: 2, title: "Shop Apple AirPods Pro 3" },
      { id: 3, title: "Shop Apple AirPods Max 2" },
      { id: 4, title: "AirPods Accessories" },
    ],
    thirdPanel: [
      { id: 1, title: "AirPods Support" },
      { id: 2, title: "AppleCare" },
      { id: 3, title: "Hearing Health" },
      { id: 4, title: "Apple Music" },
      { id: 5, title: "Apps by Apple" },
      { id: 6, title: "Apple Fitness+" },
    ],
  },

  tvandhomeHover: {
    titles: {
      first: "Explore TV & Home",
      second: "Shop TV & Home",
      third: "More from TV & Home",
    },
    firstPanel: [
      { id: 1, title: "Explore TV & Home" },
      { id: 2, title: "Apple TV 4K" },
      { id: 3, title: "HomePod" },
      { id: 4, title: "HomePod mini" },
    ],
    secondPanel: [
      { id: 1, title: "Shop Apple TV 4K" },
      { id: 2, title: "Shop HomePod" },
      { id: 3, title: "Shop HomePod mini" },
      { id: 4, title: "Shop Siri Remote" },
      { id: 5, title: "TV & Home Accessories" },
    ],
    thirdPanel: [
      { id: 1, title: "Apple TV Support" },
      { id: 2, title: "HomePod Support" },
      { id: 3, title: "AppleCare for Apple TV" },
      { id: 4, title: "AppleCare for for HomePod" },
      { id: 5, title: "Apple TV app" },
      { id: 6, title: "Apple TV" },
      { id: 7, title: "Home App" },
      { id: 8, title: "Apple Music" },
      { id: 9, title: "AirPlay" },
    ],
  },

  entertainmentHover: {
    titles: {
      first: "Explore Entertainment",
      second: "Support",
    },
    firstPanel: [
      { id: 1, title: "Explore Entertainment" },
      { id: 2, title: "Apple One" },
      { id: 3, title: "Apple TV" },
      { id: 4, title: "Apple Music" },
      { id: 5, title: "Apple Arcade" },
      { id: 6, title: "Apple Fitness+" },
      { id: 7, title: "Apple News+" },
      { id: 8, title: "Apple Podcasts" },
      { id: 9, title: "Apple Books" },
      { id: 10, title: "App Store" },
    ],
    secondPanel: [
      { id: 1, title: "Apple TV Support" },
      { id: 2, title: "Apple Music Support" },
    ],
  },

  accessoriestHover: {
    titles: {
      first: "Shop by Product",
      second: "Shop by Category",
      third: "More to Explore",
    },
    firstPanel: [
      { id: 1, title: "Shop All Accessories" },
      { id: 2, title: "iPhone" },
      { id: 3, title: "iPad" },
      { id: 4, title: "Mac" },
      { id: 5, title: "Apple Watch" },
      { id: 6, title: "Apple Vision Pro" },
      { id: 7, title: "AirPods" },
      { id: 8, title: "TV & Home" },
      { id: 9, title: "AirTag" },
      { id: 10, title: "Beats" },
    ],
    secondPanel: [
      { id: 1, title: "Headphones & Speakers" },
      { id: 2, title: "Chargers & Adapters" },
      { id: 3, title: "Smart Home Essentials" },
      { id: 4, title: "Cases & Protection" },
      { id: 5, title: "Content Creation" },
      { id: 6, title: "Gaming" },
      { id: 7, title: "Hard Drives & Storage" },
      { id: 8, title: "Mice & Keybords" },
      { id: 9, title: "Health & Fitness" },
      { id: 10, title: "Office Accessories" },
      { id: 11, title: "Software" },
    ],
    thirdPanel: [
      { id: 1, title: "New Arrivals" },
      { id: 2, title: "Made by Apple" },
      { id: 3, title: "Accessibility" },
      { id: 4, title: "Assistive Technologies" },
    ],
  },

  supportHover: {
    titles: {
      first: "Explore Support",
      second: "Get Help",
      third: "Helpful Topics",
    },

    subTitles: {
      first: "Explore Support",
    },

    firstPanel: [
      { id: 1, title: "iPhone" },
      { id: 2, title: "Mac" },
      { id: 3, title: "iPad" },
      { id: 4, title: "Watch" },
      { id: 5, title: "Apple Vision Pro" },
      { id: 6, title: "AirPods" },
      { id: 7, title: "Music" },
      { id: 8, title: "TV" },
    ],
    secondPanel: [
      { id: 1, title: "Community" },
      { id: 2, title: "Check Coverage" },
      { id: 3, title: "Genius bar" },
      { id: 4, title: "Repair" },
    ],
    thirdPanel: [
      { id: 1, title: "Get AppleCare" },
      { id: 2, title: "Apple Account and Password" },
      { id: 3, title: "Billing & Subscriptions" },
      { id: 4, title: "Accessibility" },
    ],
  },
};

export function NavHoverMenu({ category }) {
  const currentMenu = hoverMenusConfig[category];

  if (!currentMenu) return null;
  // if (!currentMenu.subTitles) return;

  return (
    <NavLinkHover
      firstPanelTitle={currentMenu.titles.first}
      firstPanel={currentMenu.firstPanel}

      firstPanelsubTitleFirst={currentMenu.subTitles?.first}
      firstPanelsubTitleSecond={currentMenu.subTitles?.second}

      secondPanelTitle={currentMenu.titles.second}
      secondPanel={currentMenu.secondPanel}

      thirdPanelTitle={currentMenu.titles.third}
      thirdPanel={currentMenu.thirdPanel}
    />
  );
}
