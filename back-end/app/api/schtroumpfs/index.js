const { Router } = require('express')

const { Schtroumpf } = require('../../models')
//const { Schtroumpf }  = require('../../models/schtroumpf.model')
const manageAllErrors = require('../../utils/routes/error-management')
//const SchtroumpfMongo = require('../../models/MongooseModels/schtroumpf.model')
const { buildSchtroumpf, buildSchtroumpfs} = require('../manager')

const router = new Router()

router.get('/', (req, res) => {

/*  try {
    const stroumpfs = buildSchtroumpfs()
    res.status(200).json(stroumpfs)
  } catch (err) {
    manageAllErrors(res, err)
  }*/

  /*  SchtroumpfMongo.find({}, (err, schtroumpfs) =>{
      if (err) { res.status(404).json(err) } else { res.status(200).json(schtroumpfs) }
    })*/
  try {
    res.status(200).json(Schtroumpf.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:StroumpfId', (req, res) => {

/*  try {
    const stroumpf = buildSchtroumpf(req.params.schtroumpfId)
    res.status(200).json(stroumpf)
  } catch (err) {
    manageAllErrors(res,err)
  }*/

/*  try {
      SchtroumpfMongo.findOne({id: resq.params.schtroumpfId }, (err, schtroumpf) => {
        console.log(schtroumpf)
      })
    } catch (err) {
        manageAllErrors(res, err)
      }*/
  try {
    res.status(200).json(Schtroumpf.getById(req.params.idS))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {

/*  try {
    const stroumpfMong = new SchtroumpfMongo({
      ...req.body,
    })
    stroumpfMong.save().then(() => {
      res.status(201).json(stroumpfMong)
    }).catch((err) => {
      res.status(400).json(err)
    })
  } catch (err) {
    manageAllErrors(res, err)
  }*/
  try {
    const schtroumpf = Schtroumpf.create({ ...req.body })
    res.status(201).json(schtroumpf)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:StroumpfId', (req, res) => {

  try {
    res.status(200).json(Schtroumpf.update(req.params.idS, req.body))
  } catch (err) {
    manageAllErrors(res,err)
  }

  /*  try {
    SchtroumpfMongo.updateOne({
      id: req.params.schtroumpfId,
    }, {
      ...req.body,
      id: req.params.schtroumpfId,
    }).then(()=> {
      res.status(200).json({message: 'updated'})
    }).catch((err) =>{
      res.status(404).json(err)
    })
  } catch (err) {
    manageAllErrors(res, err)
  }*/



  /*  try {
      res.status(200).json(Stroumpf.update(req.params.schtroumpfId, req.body))
    } catch (err) {
      manageAllErrors(res, err)
    }*/
})

router.delete('/:StroumpfId', (req, res) => {

  try {
    Schtroumpf.delete(req.params.idS)
    res.status(204).end()
  } catch (err){
    manageAllErrors(res,err)
  }

 /* try {
    SchtroumpfMongo.findOneAndDelete({
      id: req.params.schtroumpfId,
    }, {
      ...req.body,
      id: req.params.schtroumpfId,
    }).then(()=> {
      res.status(200).json({message: 'deleted'})
    }).catch((err) =>{
      res.status(404).json(err)
    })
  } catch (err) {
    manageAllErrors(res, err)
  }*/

  /*try {
    Stroumpf.delete(req.params.id)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }*/
})

module.exports = router
