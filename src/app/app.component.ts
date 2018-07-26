import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BizPage';
  description = "Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.";
  menus = [
    {
      title: 'Home',
      slug: 'intro'
    }, 
    {
      title: 'About',
      slug: 'about'
    }, 
    {
      title: 'Services',
      slug: 'services'
    }, 
    {
      title: 'Portfolio',
      slug: 'portfolio'
    }, 
    {
      title: 'Team',
      slug: 'team'
    }, 
    {
      title: 'Contact',
      slug: 'contact'
    }
  ];
  intros = [
    {
      title: 'We are professional',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/img/intro-carousel/1.jpg',

    },
    {
      title: 'At vero eos et accusamus',
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.',
      image: 'assets/img/intro-carousel/2.jpg',

    },
    {
      title: 'Temporibus autem quibusdam',
      description: 'Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.',
      image: 'assets/img/intro-carousel/3.jpg',

    },
    {
      title: 'Nam libero tempore',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.',
      image: 'assets/img/intro-carousel/4.jpg',

    },
    {
      title: 'Magnam aliquam quaerat',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/img/intro-carousel/5.jpg',

    }
  ];

  services = [
    {
      title: 'Lorem Ipsum Delino',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
      icon: 'ion-ios-bookmarks-outline'
    },
    {
      title: 'Dolor Sitema',
      description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
      icon: 'ion-ios-stopwatch-outline'
    },
    {
      title: 'Sed ut perspiciatis',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      icon: 'ion-ios-heart-outline'
    }
  ];
  aboutDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  about = [
    {
      title: 'Our Mission',
      description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icon: 'ion-ios-speedometer-outline',
      image: 'assets/img/about-mission.jpg'
    },
    {
      title: 'Our Plan',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      icon: 'ion-ios-list-outline',
      image: 'assets/img/about-plan.jpg'
    },
    {
      title: 'Our Vision',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
      icon: 'ion-ios-eye-outline',
      image: 'assets/img/about-vision.jpg'
    }
  ];

  ourServicesDescription = "Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.";
  ourServices = [
    {
      title: 'Lorem Ipsum',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
      icon: 'ion-ios-analytics-outline'
    },
    {
      title: 'Dolor Sitema',
      description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
      icon: 'ion-ios-bookmarks-outline'
    },
    {
      title: 'Sed ut perspiciatis',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      icon: 'ion-ios-paper-outline'
    },
    {
      title: 'Magni Dolores',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      icon: 'ion-ios-speedometer-outline'
    },
    {
      title: 'Nemo Enim',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
      icon: 'ion-ios-barcode-outline'
    },
    {
      title: 'Eiusmod Tempor',
      description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi',
      icon: 'ion-ios-people-outline'
    }
  ];

  callToActionDescription = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  skillsDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip";
  skills = [
    {
      title: 'HTML',
      completion: '100',
      color: 'bg-success'
    },
    {
      title: 'CSS',
      completion: '90',
      color: 'bg-info'
    },
    {
      title: 'JavaScript',
      completion: '75',
      color: 'bg-warning'
    },
    {
      title: 'Photoshop',
      completion: '55',
      color: 'bg-danger'
    }
  ];

  factsDescription = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque";
  factImage = 'assets/img/facts-img.png';
  facts = [
    {
      title: 'Clients',
      value: '274'
    },
    {
      title: 'Projects',
      value: '421' 
    },
    {
      title: 'Hours Of Support',
      value: '1,364'
    },
    {
      title: 'Hard Workers',
      value: '18'
    }
  ];

  portfolioFilters = [
    'app',
    'card',
    'web'
  ];

  portfolios = [
    {
      title: 'App 1',
      image: 'assets/img/portfolio/app1.jpg',
      filter: 'app'
    },
    {
      title: 'Web 3',
      image: 'assets/img/portfolio/web3.jpg',
      filter: 'web'
    },
    {
      title: 'App 2',
      image: 'assets/img/portfolio/app2.jpg',
      filter: 'app'
    },
    {
      title: 'Card 2',
      image: 'assets/img/portfolio/card2.jpg',
      filter: 'card'
    },
    {
      title: 'Web 2',
      image: 'assets/img/portfolio/web2.jpg',
      filter: 'web'
    },
    {
      title: 'App 3',
      image: 'assets/img/portfolio/app3.jpg',
      filter: 'app'
    },
    {
      title: 'Card 1',
      image: 'assets/img/portfolio/card1.jpg',
      filter: 'card'
    },
    {
      title: 'Crad 3',
      image: 'assets/img/portfolio/card3.jpg',
      filter: 'card'
    },
    {
      title: 'Web 1',
      image: 'assets/img/portfolio/web1.jpg',
      filter: 'web'
    }
  ];

  clients = [
    'assets/img/clients/client-1.png',
    'assets/img/clients/client-2.png',
    'assets/img/clients/client-3.png',
    'assets/img/clients/client-4.png',
    'assets/img/clients/client-5.png',
    'assets/img/clients/client-6.png',
    'assets/img/clients/client-7.png',
    'assets/img/clients/client-8.png'
  ];

  testimonials = [
    {
      name: 'Saul Goodman',
      designation: 'Ceo & Founder',
      image: 'assets/img/testimonial-1.jpg',
      description: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
    },
    {
      name: 'Sara Wilsson',
      designation: 'Designer',
      image: 'assets/img/testimonial-2.jpg',
      description: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
    },
    {
      name: 'Jena Karlis',
      designation: 'Store Owner',
      image: 'assets/img/testimonial-3.jpg',
      description: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
    },
    {
      name: 'Matt Brandon',
      designation: 'Freelancer',
      image: 'assets/img/testimonial-4.jpg',
      description: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
    },
    {
      name: 'John Larson',
      designation: 'Entrepreneur',
      image: 'assets/img/testimonial-5.jpg',
      description: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
    }
  ];

  teamDescription = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque";
  team = [
    {
      name: 'Walter White',
      designation: 'Chief Executive Officer',
      image: 'assets/img/team-1.jpg',
      twitter: '',
      facebook: '',
      google: '',
      linkedin: ''
    },
    {
      name: 'Sarah Jhonson',
      designation: 'Product Manager',
      image: 'assets/img/team-2.jpg',
      twitter: '',
      facebook: '',
      google: '',
      linkedin: ''
    },
    {
      name: 'William Anderson',
      designation: 'CTO',
      image: 'assets/img/team-3.jpg',
      twitter: '',
      facebook: '',
      google: '',
      linkedin: ''
    },
    {
      name: 'Amanda Jepson',
      designation: 'Accountant',
      image: 'assets/img/team-4.jpg',
      twitter: '',
      facebook: '',
      google: '',
      linkedin: ''
    }
  ];

  contactDescription = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque";
  address = {
    address: 'A108 Adam Street',
    city: 'NY',
    zip: '535022',
    country: 'USA',
    phone: '+1 5589 55488 55',
    email: 'info@example.com'
  }

  usefulLinks = [
    {
      title: 'Home',
      slug: 'intro'
    },
    {
      title: 'About us',
      slug: 'about'
    },
    {
      title: 'Services',
      slug: 'services'
    },
    {
      title: 'Terms of service',
      slug: ''
    },
    {
      title: 'Privacy policy',
      slug: ''
    }
  ];

  socialLinks = {
    twitter: '',
    facebook: '',
    instagram: '',
    google: '',
    linkedin: ''
  };

  newsLetterDescription = "Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.";
}
