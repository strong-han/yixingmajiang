class Config{
    public static UI_TongZi:egret.SpriteSheet;
    public static UI_WanZi:egret.SpriteSheet;
    public static UI_TiaoZi:egret.SpriteSheet;
    public static UI_Feng:egret.SpriteSheet;
    public static UI_Hua:egret.SpriteSheet;
    public static mj_width=50;
    public static mj_height=70;
    public static not_out_mj = [];
    public static huase = ['w','t','b','f','h'];
    public static init(){
		this.UI_TongZi = RES.getRes("tongzi_json");
		this.UI_WanZi = RES.getRes("wanzi_json");
        this.UI_TiaoZi = RES.getRes("tiaozi_json");
        this.UI_Feng = RES.getRes("feng_json");
        this.UI_Hua = RES.getRes("hua_json");
	}
    public static init_mj(){
        for(let i = 0;i<=4;i++){
            this.create_mj(i); 
            this.xipai();
        }
        
    }
    private static create_mj(huase){
        let huase1 = huase;
        if(huase1<=2){
            for(var i = 1;i<=9;i++){
                this.not_out_mj.push([huase1,i]);
                this.not_out_mj.push([huase1,i]);
                this.not_out_mj.push([huase1,i]);
                this.not_out_mj.push([huase1,i]);
            }
        }else if(huase1==3){
            for(var i = 1;i<=7;i++){
                this.not_out_mj.push([huase1,i]);
                this.not_out_mj.push([huase1,i]);
                this.not_out_mj.push([huase1,i]);
                this.not_out_mj.push([huase1,i]);
            }    
        }else if(huase1 == 4){
            for(var i = 1;i<=8;i++){
                this.not_out_mj.push([huase1,i]);
            }
        }
    }
    public static xipai(){
        var len = this.not_out_mj.length;
        
        while(len > 0){
          let  index = parseInt(''+Math.random()*len);
          [this.not_out_mj[index],this.not_out_mj[len-1]] = [this.not_out_mj[len-1],this.not_out_mj[index]];
          len--;
        }
    }
}