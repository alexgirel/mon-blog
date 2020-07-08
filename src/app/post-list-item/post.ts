class Post {
    
    titrePost: string;  
    contenuPost: string;  
    loveIts: number;  
    created_at: Date;
  
    constructor() {
      this.created_at = new Date();
    }
  
    getDateCreation() {
      return this.created_at;
    }
  }