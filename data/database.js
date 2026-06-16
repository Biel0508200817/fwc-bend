const supabase = require('./supabase')

const database = {

    async getSelecoes() {
        return await supabase
            .from('teams')
            .select('*')
    },

    async getArbitros() {
        return await supabase
            .from('referees')
            .select('*')
    },

    async getEstadios() {
        return await supabase
            .from('stadiums')
            .select('*')
    },

    async getJogos() {
        return await supabase
            .from('matches')
            .select(`
                *,
                stadiums(*)
            `)
    },

    async criarAvaliacao(avaliacao) {
        return await supabase
            .from('reviews')
            .insert([avaliacao])
    }

}

module.exports = database