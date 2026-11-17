import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center py-5 my-5">
      <h1 className="not-found-code">404</h1>
      <h2 className="h4 mb-3">الصفحة غير موجودة</h2>
      <p className="muted-text mb-4">
        الرابط الذي فتحته غير صحيح أو تم نقل الصفحة.
      </p>
      <Link to="/" className="btn btn-orange">
        العودة إلى الرئيسية
      </Link>
    </div>
  );
}

export default NotFound;
