import { useRef, useEffect, useState, FC } from "react";
import { createPortal } from "react-dom";

interface ClientOnlyPortalProps {
  children: React.ReactNode;
  selector: string;
}

const ClientOnlyPortal: FC<ClientOnlyPortalProps> = ({
  children,
  selector,
}) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export default ClientOnlyPortal;
