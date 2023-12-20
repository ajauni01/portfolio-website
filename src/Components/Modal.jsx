const Modal = ({ id, projectTitle, serverSite, clientSide, liveSite }) => {
  console.log("project title", projectTitle);

  const showModal = () => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      {/* Open the modal using showModal() method */}
      <button className="btn btn-link font-2xl" onClick={showModal}>
        View Details
      </button>
      <dialog id={id} className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box bg-gray-300">
          <h3 className="font-bold text-2xl">
            <span className="pe-2">{projectTitle}</span>Credentials
          </h3>

          <div className="py-4">
            <a
              className="pe-2 underline text-blue text-xl"
              href={serverSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              Server Site
            </a>
            <a
              className="pe-2 underline text-blue text-xl"
              href={clientSide}
              target="_blank"
              rel="noopener noreferrer"
            >
              Client Site
            </a>
            <a
              className="underline text-blue text-xl"
              href={liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
