export class Post {
    
    titrePost: string;  
    contenuPost: string;  
    loveIts: number;  
    created_at: Date;
  
    constructor(titre: string, contenu: string, loveIts: number) {
      this.titrePost = titre;
      this.contenuPost = contenu;
      this.loveIts = loveIts;
      this.created_at = new Date();
    }
  
    public getDateCreation() {
      return this.created_at;
    }
  }