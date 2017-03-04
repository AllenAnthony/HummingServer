/**
 * Created by stardust on 2016/12/11.
 */

var exec = require('child_process').exec;
var fs = require('fs');

class Match{
    constructor(sourceData){
        this.filename = './tmp/tmpfile.wav';
        fs.writeFile(this.filename, Buffer.from(sourceData, 'base64'), (err) => {
            if( err )
                throw err;
            console.log('saved data in ' + this.filename);
        });
    }

    doMatch(callback){
        this.filename = './tmp/testflower1.wav';        // for DEBUG
        var resultFile = './tmp/result.txt';
        var cmd = './tmp/SDHumming.exe ./tmp/QBHModel.dat ./tmp/QBHModel.info ' + this.filename + ' ' + resultFile;
        exec(cmd, callback);
    }

    static parseOutput(output){
        console.log(output);
        var array = output.split(';');
        return {
            'name' : array[0],
            'singer' : array[1],
            'album' : array[2],
            'score' : array[3]
        };
    }

}

module.exports = Match;