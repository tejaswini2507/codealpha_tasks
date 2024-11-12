let currentImageIndex = 0;
const images = [
    'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6943110/pexels-photo-6943110.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3868552/pexels-photo-3868552.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4058530/pexels-photo-4058530.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1909572/pexels-photo-1909572.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3454270/pexels-photo-3454270.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5689657/pexels-photo-5689657.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1730382/pexels-photo-1730382.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/9899929/pexels-photo-9899929.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3689772/pexels-photo-3689772.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4406222/pexels-photo-4406222.jpeg?auto=compress&cs=tinysrgb&w=800'
];

function openmodal(index) {
    currentImageIndex = index;
    document.getElementById('modal-image').src = images[currentImageIndex];
    document.getElementById('imageModal').style.display = "flex";
}
function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}
function prevImage() {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    document.getElementById('modal-image').src = images[currentImageIndex];
}
function nextImage() {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    document.getElementById('modal-image').src = images[currentImageIndex];
}