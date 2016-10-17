let Item = require('./Item.js');

const MIN_EFACTOR = 1.3;
const MAX_EFACTOR = 2.5;
const MIN_QUALITY = 0;
const MAX_QUALITY = 5;

class SuperMemo2 {
    constructor()
    {
      this.items = [];
    }

    calculateEassinessFactor(OldEFactor, quality)
    {
        this.checkQualityRange(quality);
        this.checkEFactorValue(OldEFactor);

        let newEfactor = OldEFactor+(0.1-(5-quality)*(0.08+(5-quality)*0.02));

        return this.getEassinessFactorBeetweenBoundaries(newEfactor);
    }

    checkQualityRange(quality)
    {
        if(MIN_QUALITY > quality || MAX_QUALITY < quality) {
            throw new Error('quality not valid must be beetween ' + MIN_QUALITY + ' and ' + MAX_QUALITY);
        }
    }

    checkEFactorValue(eFactor)
    {
      if(MIN_EFACTOR > eFactor || MAX_EFACTOR < eFactor) {
          throw new Error('New efactor not valid must be beetween ' + MIN_EFACTOR + ' and ' + MAX_EFACTOR);
      }
    }

    getEassinessFactorBeetweenBoundaries(efactor){
        if(efactor < MIN_EFACTOR) {
            return MIN_EFACTOR;
        }

        if(efactor > MAX_EFACTOR) {
            return MAX_EFACTOR;
        }

        return efactor;
    }

    addItem(word) {
        let item = new Item(word, MAX_EFACTOR);
        this.items.push(item);
        return item;
    }

}

module.exports = SuperMemo2;
