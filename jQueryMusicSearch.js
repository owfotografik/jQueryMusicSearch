var MusicSearch = (function () {
    
    var songs = [];
    
    function MusicSearchConstructor() {
    
    }
    
    MusicSearchConstructor.prototype.getAlbum = function (term, limit, callback) {
       

        var apiUrl = `https://itunes.apple.com/search?term=${term}&limit=${limit}`;
        
        var url = "http://bcw-getter.herokuapp.com/?url=" + encodeURIComponent(apiUrl);

        $.getJSON(url, function (data) {
 console.log(data);
             songs = data.results.map(function(song) {
                 return {
                     title: song.trackName,
                     albumArt: song.artworkUrl60,
                     artist: song.artistName,
                     collection: song.collectionName,
                     price: song.collectionPrice,
                     preview: song.previewUrl
                 }
             })
             console.log(songs);
             callback(songs);
            
         });
       
    }

    
    return MusicSearchConstructor;
    })();