class BeginState extends eui.Component implements  eui.UIComponent {
	private begingame:eui.Button;
	private _mj=[];
	public constructor() {
		super();
		
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
	private init(){
		
		this.begingame.addEventListener(egret.TouchEvent.TOUCH_TAP,this.BeginGame,this);
	}
	private BeginGame(){
		console.log('BeginGame');
		if(Config.not_out_mj.length == 0){
			Config.init_mj();
		}
		Config.xipai();
		this.fapai();
		
	}
	private fapai(){
		
		this._mj = [];
		for(var i = 0;i<13;i++){
			console.log(Config.not_out_mj[i]);
			this._mj.push(Config.not_out_mj[i]);
		}
		console.log(this._mj.length);
		for(var i = 0;i < this._mj.length;i++){
			this.showMjTexture(this._mj[i][0],this._mj[i][1],i);
		}
	}
	private showMjTexture(a,b,index){
		var mj = new egret.Bitmap();
		if(a==0){
			mj.texture = Config.UI_WanZi.getTexture('w'+b);
		}else if(a[0]==1){
			mj.texture = Config.UI_TiaoZi.getTexture('t'+b);
		}else if(a==2){
			mj.texture = Config.UI_TongZi.getTexture('b'+b);
		}else if(a==3){
			mj.texture = Config.UI_Feng.getTexture('f'+b);
		}else{
			mj.texture = Config.UI_Hua.getTexture('h'+b);
		}
		mj.width = Config.mj_width;
		mj.height = Config.mj_height;
		mj.x = Config.mj_width * index;
		mj.y = 100;
		this.addChild(mj);
	}
	private liPai(){
		
	}
}