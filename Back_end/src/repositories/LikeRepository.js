const Like = require('../models/like');

class LikeRepository{
    
    insertLike = (imgId) => {
        return this._processLike('add', imgId);
    }

    removeLike = (imgId) => {
       return this._processLike('subtract', imgId);
    }

    _processLike = (op, imgId) => {
        const valueOp = ( op == 'add' ? 1 : -1);

        return Like.findByPk(imgId)
        .then( img => {
            if(img == null){
                return Like.create({ id: imgId, counter: valueOp > 0 ? 1 : 0 });
            }

            img.counter = img.counter + valueOp;
            if(img.counter < 0){
                img.counter = 0;
            }
            return img.save();
        })
        .catch( erro => erro )
    }

    counterLikes = (imgId) => {
        return Like.findByPk(imgId);
    }
}


module.exports = LikeRepository;