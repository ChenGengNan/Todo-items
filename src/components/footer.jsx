import '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: "CGN",
            blog: "none"
        }
    },
    render() {  
        return (
            <div id="footer">
                <span>A test by {this.author},has bolg:{this.blog}</span>
                <br/>
                <span>The first Vue.js project</span>
            </div>
        )
    }
}