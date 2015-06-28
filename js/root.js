/**
 * Created by Marco on 28/06/2015.
 */

function Loader () {
    this.pointer = 0;
    this.stringer = null;

    this.setup = function() {
        this.stringer = new String("My String example");
        this.pointer += 1;
    }

    var jsSample = "Sample";
}