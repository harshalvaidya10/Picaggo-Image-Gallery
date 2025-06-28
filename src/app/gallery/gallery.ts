import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery {
  @Output() previewStateChange = new EventEmitter<boolean>();

  imageUrls = [
    { id: 1, url: 'https://images.pexels.com/photos/26797335/pexels-photo-26797335/free-photo-of-scenic-view-of-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 2, url: 'https://images.unsplash.com/photo-1744137285276-57ca4048f805?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, url: 'https://images.unsplash.com/photo-1746252000365-25e7fe205344?q=80&w=2250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, url: 'https://images.unsplash.com/photo-1746310833406-1216bee76a09?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, url: 'https://images.unsplash.com/photo-1749740577807-e20202e60da4?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, url: 'https://images.unsplash.com/photo-1746294250258-a2c039ece448?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 7, url: 'https://images.unsplash.com/photo-1746483965416-158f9b2b1936?q=80&w=2517&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 8, url: 'https://images.unsplash.com/photo-1746865028155-dd98111276f9?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 9, url: 'https://plus.unsplash.com/premium_photo-1749149151516-f06512958d91?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 10, url: 'https://images.unsplash.com/photo-1748069036834-41a799145294?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 11, url: 'https://images.unsplash.com/photo-1748019156345-64162e5b877e?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 12, url: 'https://plus.unsplash.com/premium_photo-1749565353304-db4858016f43?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 13, url: 'https://images.unsplash.com/photo-1748901999935-2234cfb6d812?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 14, url: 'https://plus.unsplash.com/premium_photo-1749544311043-3a6a0c8d54af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 15, url: 'https://images.unsplash.com/photo-1750024774702-1fd1a377fdfb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 16, url: 'https://images.unsplash.com/photo-1750087023850-36213c737960?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 17, url: 'https://images.unsplash.com/photo-1750079675628-578df2b4dfad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D' },
    { id: 18, url: 'https://images.unsplash.com/photo-1749810364373-5e2f18bb842a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D' },
    { id: 19, url: 'https://images.unsplash.com/photo-1749880783183-0a15dfa9e0c0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 20, url: 'https://images.unsplash.com/photo-1749916883754-a7b3fc88d4a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D' },
    { id: 21, url: 'https://images.unsplash.com/photo-1743596259979-7c0d026abdcd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D' },
    { id: 22, url: 'https://images.unsplash.com/photo-1744124371841-d2723e438bdf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 23, url: 'https://plus.unsplash.com/premium_photo-1749066975506-b06ac9832749?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D' },
    { id: 24, url: 'https://images.unsplash.com/photo-1748989431540-434fad2e77c7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Nnx8fGVufDB8fHx8fA%3D%3D' }
  
  ];

  selectedIndex: number | null = null;
  slideDirection: 'left' | 'right' | null = null;
  isClosing = false;
  isImageVisible = true;
  showDownloadMenu = false;
  currentImageViews = 112061;
  currentImageDownloads = 178;

  openPreview(index: number) {
    this.selectedIndex = index;
    this.isClosing = false;
    this.slideDirection = null;
    this.previewStateChange.emit(true); // Emit true when opening
  }

  closePreview() {
    this.isClosing = true;
    this.showDownloadMenu = false; // Close download menu
    setTimeout(() => {
      this.selectedIndex = null;
      this.isClosing = false;
      this.previewStateChange.emit(false); // Emit false when closing
    }, 300);
  }

  nextImage() {
    if (this.selectedIndex !== null) {
      this.slideDirection = 'right';
      this.isImageVisible = false;
      setTimeout(() => {
        this.selectedIndex = (this.selectedIndex! + 1) % this.imageUrls.length;
        this.slideDirection = null;
        this.isImageVisible = true;
      }, 300);
    }
  }

  prevImage() {
    if (this.selectedIndex !== null) {
      this.slideDirection = 'left';
      this.isImageVisible = false;
      setTimeout(() => {
        this.selectedIndex = (this.selectedIndex! - 1 + this.imageUrls.length) % this.imageUrls.length;
        this.slideDirection = null;
        this.isImageVisible = true;
      }, 300);
    }
  }

  toggleDownloadMenu() {
    this.showDownloadMenu = !this.showDownloadMenu;
  }

  getCurrentImageData() {
    if (this.selectedIndex !== null) {
      return this.imageUrls[this.selectedIndex];
    }
    return null;
  }

  handleLike() {
    console.log('Image liked!');
    // Add like functionality here later
  }

  handleShare() {
    console.log('Image shared!');
    // Add share functionality here later
  }

  downloadImage(size: string) {
    if (this.selectedIndex !== null) {
      const currentImage = this.imageUrls[this.selectedIndex];
      let downloadUrl = currentImage.url;
      
      // Modify URL parameters for different sizes if the image service supports it
      if (downloadUrl.includes('unsplash.com') || downloadUrl.includes('pexels.com')) {
        // Remove existing size parameters and add new ones
        const baseUrl = downloadUrl.split('?')[0];
        const urlParams = new URLSearchParams();
        
        switch (size) {
          case 'small':
            urlParams.set('w', '640');
            urlParams.set('h', '480');
            urlParams.set('fit', 'crop');
            break;
          case 'medium':
            urlParams.set('w', '1280');
            urlParams.set('h', '720');
            urlParams.set('fit', 'crop');
            break;
          case 'large':
            urlParams.set('w', '1920');
            urlParams.set('h', '1080');
            urlParams.set('fit', 'crop');
            break;
        }
        
        urlParams.set('auto', 'format');
        urlParams.set('q', '80');
        downloadUrl = `${baseUrl}?${urlParams.toString()}`;
      }
      
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `image-${currentImage.id}-${size}.jpg`;
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log(`Downloading image ${currentImage.id} in ${size} size`);
    }
    
    this.showDownloadMenu = false;
  }
}
