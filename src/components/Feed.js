import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ImageModal from './ImageModal';

function Feed() {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const loadImages = async () => {
    const newImages = [];
    for (let i = 0; i < 12; i++) {
      const response = await fetch('https://picsum.photos/350');
      const imageBlob = await response.blob();
      const imageUrl = URL.createObjectURL(imageBlob);
      newImages.push(imageUrl);
    }
    setImages(newImages);
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  return (
    <Container>
      <Row>
        {images.map((image, index) => (
          <Col key={index} lg={3} md={4} sm={6} xs={6} className="mb-4">
            <img 
              src={image} 
              alt={`Random pic ${index}`} 
              className="w-100 h-auto cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          </Col>
        ))}
      </Row>
      <ImageModal 
        show={showModal} 
        handleClose={handleClose} 
        imageUrl={selectedImage}
      />
    </Container>
  );
}

export default Feed;
