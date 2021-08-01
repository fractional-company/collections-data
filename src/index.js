class VerifiedCollections {
    static async load() {
        return await import('./collections.json').then(m => m ? m.default : m)
    }
}

export default VerifiedCollections
