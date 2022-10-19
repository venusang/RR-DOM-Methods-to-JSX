let koalaContainer = <div className='ui items'></div>;

// Koala Card
// koalas are in './public/koalas.js'
koalas.forEach(koala => {
    let koalaCard = <div className='item'></div>
    koalaCard.style.cursor = 'pointer';

    // Koala Card Image
    let imageContainer = <div className='image'></div>
    let koalaImage = <img src={koala.imageURL} />

    imageContainer.append(koalaImage)

    // Koala Card Content
    let koalaContent = <div className='content'><div className='header'>koala.name</div></div>

    let descriptionParagraph = <p>koala.description</p>

    let descriptionContainer = <div className='description'>descriptionParagraph</div>

    koalaContent.append(
        descriptionContainer
    )

    koalaCard.append(
        imageContainer,
        koalaContent
    )

    koalaContainer.append(koalaCard)
})

document.body.append(koalaContainer)