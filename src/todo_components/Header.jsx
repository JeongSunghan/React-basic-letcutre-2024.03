export default function Header({ filters, filter, onFilterChange }) {
  // 색상을 동적으로 결정하기 위한 함수
  const getColor = (value) => {
    switch (value) {
      case 'all':
        return '#b8e994'; // 연한 녹색
      case 'active':
        return '#ffdd59'; // 연한 주황색
      case 'completed':
        return '#74b9ff'; // 연한 파란색
      default:
        return ''; // 기본 색상은 지정하지 않음
    }
  };

  return (
    // d-flex와 justify-content-center를 사용하여 버튼 그룹을 중앙 정렬.
    <div className="d-flex justify-content-center">
      <div className="btn-group">
        {filters.map((value, index) => (
          <button
            key={value}
            // 마지막 버튼을 제외하고 오른쪽 마진을 적용하여 간격 만들기
            className={`btn ${filter === value ? '' : 'btn-outline-secondary'} ${index < filters.length - 1 ? 'me-2' : ''}`}
            style={{ backgroundColor: getColor(value), borderColor: getColor(value) }}
            onClick={() => onFilterChange(value)}
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
