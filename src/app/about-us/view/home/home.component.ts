import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  // isModalOpen = false;
  // selectedImage = '';

  // openModal(imageSrc: string) {
  //   this.selectedImage = imageSrc;
  //   this.isModalOpen = true;
  // }

  // closeModal() {
  //   this.isModalOpen = false;
  // }

  currentSlide = 0;

  slides = [
    {
      image: 'pic-1.jpg',
      // title: 'Slide 1 Title',
      description: 'I am the CEO and Director of Operations of CTX Knights Basketball Academy. I want to thank Espousal for the fantastic job they did with our business website. From graphic work to the overall web development, my experiance was great. And Anthony my project manager to overseeing everything and leading his team to do a fantastic job. Looking forward to doing business with you for years to come.'
    },
    {
      image: 'pic-3.jpg',
      title: 'Slide 2 Title',
      description: 'This is It is a pleasure for me to recommend Anthony and his team to anyone in need of web design. They have been professional, comprehensive and competent throughout the process of our working together. I feel that i have established a relationship with them for years to come. The reaction to our new web site has been overwhelmingly positive. description for slide 2.'
    },
    {
      image: 'pic-5.jpg',
      title: 'Slide 3 Title',
      description: 'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet. Nascetur lobortis diam, duis orci.'
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }


}
