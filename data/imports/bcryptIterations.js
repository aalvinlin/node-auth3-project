module.exports = {
    bcryptIterations: (process.env.BCRYPT_ITERATIONS && parseInt(process.env.BCRYPT_ITERATIONS)) || 14
}