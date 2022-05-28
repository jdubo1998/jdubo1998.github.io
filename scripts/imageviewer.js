window.onload = function()
{
    var carousel = document.getElementById('imageViewCarouselControls');
    carousel.addEventListener('slid.bs.carousel', function() {
        document.getElementById('imageViewModalTitle').innerHTML=$(this).find('.active')[0].children[0].alt;
    });

    var carouselInner = document.getElementById('imageViewCarouselInner');

    var images = document.getElementsByTagName("img");
    for (var i=0, len=images.length, img; i<len; i++) 
    {
        img = images[i];
        img.addEventListener("click", function() 
        {
            var orinSrc = this.src;
            var parent = this.parentElement;
            if (parent.id.match("^.+Images$"))
            {
                var html = ''
                parent.childNodes.forEach(function(item, index)
                {
                    var active = '';
                    if (item.nodeType == 1)
                    {
                        
                        if (orinSrc == item.src)
                        {
                            active = ' active';
                            document.getElementById('imageViewModalTitle').innerHTML=item.alt;
                        }

                        html += `<div class="carousel-item${active}"><img src="${item.src}" class="d-block w-100 p-2" alt="${item.alt}"></div>`;
                    }
                });

                carouselInner.innerHTML = html;

                $('#imageViewModal').modal('show');
            }
        });
    }
}
