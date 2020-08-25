export class Post {
    
    titrePost: string;  
    contenuPost: string;  
    loveIts: number = 0;  
    created_at: Date;
  
    constructor(titre: string, contenu: string) {
      this.titrePost = titre;
      this.contenuPost = contenu;
      this.created_at = new Date();
    }
  
    public getDateCreation() {
      return this.created_at;
    }
  }