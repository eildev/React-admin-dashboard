import { Icon } from "@iconify/react/dist/iconify.js";
import useReactApexChart from "../../../data/useReactApexChart";


const PaymentStatus = () => {

  let { createChatEleven } = useReactApexChart();


  return (
    <div>
      <div className='card radius-16'>
        <div className='card-header'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Investment</h6>
            <select className='form-select form-select-sm w-auto bg-base border text-secondary-light'>
              <option>Today</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
        <div className='card-body mt-40'>
          <div className='mt-3 mb-24 text-center pe-110 position-relative max-w-288-px mx-auto'>
            <div className='w-170-px h-170-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center border border-white border-width-2-px'>
              <img
                src='https://www.imgcorporations.com/images/bg-img.jpg'
                alt=''
                className='position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover rounded-circle'
              />
              <h5 className='text-white'> 60% </h5>
            </div>
            <div className='w-144-px h-144-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center border border-white border-width-3-px position-absolute bottom-50 start-50 mt--36'>
              <img
                src='https://www.imgcorporations.com/images/bg-img.jpg'
                alt=''
                className='position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover rounded-circle'
              />
              <h5 className='text-white'> 30% </h5>
            </div>
            <div className='w-110-px h-110-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center border border-white border-width-3-px position-absolute bottom-0 start-50 translate-middle-x ms-48'>
              <img
                src='https://www.imgcorporations.com/images/bg-img.jpg'
                alt=''
                className='position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover rounded-circle'
              />
              <h5 className='text-white'> 10% </h5>
            </div>
          </div>
          <div className='d-flex align-items-center flex-wrap gap-24 justify-content-between'>
            <div className='d-flex flex-column align-items-start'>
              <div className='d-flex align-items-center gap-2'>
                <span className='w-12-px h-12-px rounded-pill bg-primary-600' />
                <span className='text-secondary-light text-sm fw-normal'>
                  Net Income
                </span>
              </div>
              <h6 className='text-primary-light fw-semibold mb-0 mt-4 text-lg'>
                $50,000
              </h6>
            </div>
            <div className='d-flex flex-column align-items-start'>
              <div className='d-flex align-items-center gap-2'>
                <span className='w-12-px h-12-px rounded-pill bg-purple' />
                <span className='text-secondary-light text-sm fw-normal'>
                  Real State
                </span>
              </div>
              <h6 className='text-primary-light fw-semibold mb-0 mt-4 text-lg'>
                $150
              </h6>
            </div>
            <div className='d-flex flex-column align-items-start'>
              <div className='d-flex align-items-center gap-2'>
                <span className='w-12-px h-12-px rounded-pill bg-success-600' />
                <span className='text-secondary-light text-sm fw-normal'>
                  Business
                </span>
              </div>
              <h6 className='text-primary-light fw-semibold mb-0 mt-4 text-lg'>
                $100
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between text-center gap-3 mt-3">
        <div className="p-3 card w-100">
          <div className="d-flex justify-content-center align-item-center gap-2">
            <svg width="35" height="19" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.312 2.23076C35.1499 3.06871 35.1499 4.42729 34.312 5.26524L21.4377 18.1395C20.5998 18.9774 19.2412 18.9774 18.4032 18.1395L11.3377 11.0739L4.27208 18.1395C3.43413 18.9774 2.07554 18.9774 1.23759 18.1395C0.399643 17.3015 0.399643 15.9429 1.23759 15.105L9.82042 6.52217C10.6584 5.68422 12.017 5.68422 12.8549 6.52217L19.9205 13.5878L31.2775 2.23076C32.1154 1.39281 33.474 1.39281 34.312 2.23076Z" fill="#15A83E" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2117 2.13875C24.2117 0.953708 25.1723 -0.00695801 26.3574 -0.00695801H32.7945C33.9795 -0.00695801 34.9402 0.953708 34.9402 2.13875V8.57587C34.9402 9.76091 33.9795 10.7216 32.7945 10.7216C31.6095 10.7216 30.6488 9.76091 30.6488 8.57587V4.28446H26.3574C25.1723 4.28446 24.2117 3.32379 24.2117 2.13875Z" fill="#15A83E" />
            </svg>
            <span className="text-sm">This Month</span>
          </div>
          <h5 className="mt-3 text-xl">+$27,785</h5>
        </div>
        <div className="p-3 card w-100">
          <div className="d-flex justify-content-center align-item-center gap-2">
            <svg width="35" height="20" viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.918037 17.0921C0.0872002 16.2612 0.0872002 14.9142 0.918037 14.0834L13.683 1.31843C14.5138 0.487597 15.8609 0.487597 16.6917 1.31843L23.6973 8.32402L30.7029 1.31843C31.5337 0.487597 32.8808 0.487597 33.7116 1.31843C34.5424 2.14927 34.5424 3.49632 33.7116 4.32715L25.2016 12.8371C24.3708 13.6679 23.0238 13.6679 22.1929 12.8371L15.1873 5.83152L3.92676 17.0921C3.09592 17.9229 1.74887 17.9229 0.918037 17.0921Z" fill="#DF3434" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9329 17.1832C10.9329 18.3582 9.98035 19.3107 8.80537 19.3107H2.42291C1.24793 19.3107 0.295423 18.3582 0.295423 17.1832V10.8008C0.295423 9.6258 1.24793 8.67329 2.42291 8.67329C3.59789 8.67329 4.5504 9.6258 4.5504 10.8008V15.0558H8.80537C9.98035 15.0558 10.9329 16.0083 10.9329 17.1832Z" fill="#DF3434" />
            </svg>

            <span className="text-sm">Previous Month</span>
          </div>
          <h5 className="mt-3 text-xl">-$27,785</h5>
        </div>
      </div>

    </div>
  );
};

export default PaymentStatus;
