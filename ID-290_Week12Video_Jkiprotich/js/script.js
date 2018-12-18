

const tuensApp = new Vue({
  el:"#tunesApp",
  data: {
    siteTitle:'Itunes Searchenator 3000',
    // songsArray: [
    //   'Granmma Gor Ran Over By A Reindeer',
    //   'Silent Night',
    //   'Deck the Halls',
    //   '12 Days of Christmas',
    //   'Frosty vs Global Warming',
    //   'Jingle Bell Rock',
    //   'O Christmas Tree',
    //   'Christmas Can-Can',
    //   'Mamma Kissing Santa'
    // ],
    songsVisible: false,
    searchTerm: 'bono',
    songList:[],
    limit: 10,
    entity: 'song'
  },
  methods:{

    getMusic(){

      fetch(`https://itunes.apple.com/search?term=${this.searchTerm}&limit=${this.limit}&entity=${this.entity}`)
      .then( data => data.json() )
      .then( songs => {
        this.songList = songs.results;
        console.log(this);
      });
    }
  }
});
