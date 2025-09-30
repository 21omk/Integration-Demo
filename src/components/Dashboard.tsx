import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [user] = useState({ name: 'John Doe', email: 'john.doe@example.com' });
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('User logged out');
    navigate('/login');
  };

  const stats = [
    { title: 'Total Projects', value: 12, icon: '📁' },
    { title: 'Active Tasks', value: 8, icon: '✅' },
    { title: 'Completed', value: 24, icon: '🏆' },
    { title: 'Team Members', value: 6, icon: '👥' }
  ];

  const recentActivities = [
    { action: 'Created new project', time: '2 hours ago', type: 'create' },
    { action: 'Completed task review', time: '4 hours ago', type: 'complete' },
    { action: 'Updated user profile', time: '1 day ago', type: 'update' },
    { action: 'Joined team meeting', time: '2 days ago', type: 'meeting' }
  ];

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h2>Dashboard</h2>
        </div>
        <div className="nav-user">
          <span className="user-name">Welcome, {user.name}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-grid">
          <div className="stats-section">
            <h3>Overview</h3>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-info">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-title">{stat.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section">
            <h3>Profile Information</h3>
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="profile-info">
                <h4>{user.name}</h4>
                <p>{user.email}</p>
                <button className="edit-profile-btn">Edit Profile</button>
              </div>
            </div>
          </div>

          <div className="activity-section">
            <h3>Recent Activities</h3>
            <div className="activity-list">
              {recentActivities.map((activity, index) => (
                <div key={index} className={`activity-item ${activity.type}`}>
                  <div className="activity-content">
                    <div className="activity-action">{activity.action}</div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="quick-actions-section">
            <h3>Quick Actions</h3>
            <div className="quick-actions">
              <button className="action-btn primary">New Project</button>
              <button className="action-btn secondary">Add Task</button>
              <button className="action-btn secondary">Invite Member</button>
              <button className="action-btn secondary">View Reports</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;