const { Schhtroumpf } = require('../models/schtroumpf.model')
/**
 * Function buildQuizz.
 * This function aggregates the questions and answers from the database to build a quizz with all the data needed by the clients.
 * @param quizId
 */
const buildSchtroumpf = (SchtroumpfId) => {
    const schtroumpf = Schhtroumpf.getById(SchtroumpfId)
    return { ...schtroumpf }
}

/**
 * Function buildQuizzes.
 * This function aggregates the questions and answers from the database to build entire quizzes.
 */
const buildSchtroumpfs = () => {
    const schtroumpfs = Schhtroumpf.get();
    return schtroumpfs.map((schtroumpf) => buildQuizz(quiz.schtroumpf))
}

module.exports = {
  buildSchtroumpf,
  buildSchtroumpfs
}
