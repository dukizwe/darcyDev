export default function Copied () {
    var btncopy = document.querySelector('.phone-number');
    if(btncopy) {
        btncopy.addEventListener('click', docopy);
    }
    function docopy(e) {
        e.preventDefault()
        var range = document.createRange();
        var target = this.dataset.target;
        var fromElement = document.querySelector(target);
        var selection = window.getSelection();

        range.selectNode(fromElement);
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            var result = document.execCommand('copy');
            if (result) {
                // La copie a réussi
                this.classList.add('copied')
                setTimeout(function() {
                    document.querySelector('.phone-number').classList.remove('copied')
                }, 2000)
            }
        }
        catch(err) {
            // Une erreur est survenue lors de la tentative de copie
            alert(err);
        }

        selection = window.getSelection();

        if (typeof selection.removeRange === 'function') {
            selection.removeRange(range);
        } else if (typeof selection.removeAllRanges === 'function') {
            selection.removeAllRanges();
        }
    }
}