interface SurpriseButtonProps {
  isActive: boolean;
  onToggle: () => void;
}

export function SurpriseButton({ isActive, onToggle }: SurpriseButtonProps) {
  return (
    <>
      <button
        type="button"
        className="rainbow-btn btn btn-lg"
        onClick={onToggle}
      >
        {isActive ? 'CLICK TO UNROLL!' : 'SURPRISE!'}
      </button>
      <div className="text-center">
        <h3 className={`rainbow-text mt-3${isActive ? ' active' : ''}`}>
          <em>GOTCHA! Long live the Rickroll.</em>
        </h3>
        <img
          src="/assets/images/icegif-162.gif"
          alt="Surprise!"
          className="rickroll-img pb-5"
          style={{ maxWidth: isActive ? '100%' : '0%' }}
        />
      </div>
    </>
  );
}
