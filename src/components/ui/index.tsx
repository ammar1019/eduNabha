import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple';
  trend?: {
    value: number;
    label: string;
    isPositive: boolean;
  };
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color = 'primary', trend }) => {
  const palette = {
    primary: {
      icon: 'bg-primary-100 text-primary-600',
      border: 'border-primary-100',
      accent: 'from-primary-200/30 to-transparent',
    },
    success: {
      icon: 'bg-green-100 text-green-600',
      border: 'border-green-100',
      accent: 'from-green-200/30 to-transparent',
    },
    warning: {
      icon: 'bg-yellow-100 text-yellow-600',
      border: 'border-yellow-100',
      accent: 'from-yellow-200/40 to-transparent',
    },
    danger: {
      icon: 'bg-red-100 text-red-600',
      border: 'border-red-100',
      accent: 'from-red-200/30 to-transparent',
    },
    info: {
      icon: 'bg-blue-100 text-blue-600',
      border: 'border-blue-100',
      accent: 'from-blue-200/30 to-transparent',
    },
    purple: {
      icon: 'bg-purple-100 text-purple-600',
      border: 'border-purple-100',
      accent: 'from-purple-200/30 to-transparent',
    },
  } as const;

  const tone = palette[color as keyof typeof palette];

  return (
    <div className={`relative overflow-hidden rounded-2xl border ${tone.border} bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900`}>
      <div className={`absolute inset-x-6 top-0 h-28 rounded-b-[48px] bg-gradient-to-br ${tone.accent} opacity-60`} />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{title}</p>
          <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{value}</h3>
        </div>
        <div className={`rounded-2xl p-3 ${tone.icon}`}>{icon}</div>
      </div>
      {trend && (
        <div className="relative mt-4 flex items-center gap-2 text-sm">
          <span className={`font-semibold ${trend.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
            {trend.isPositive ? '▲' : '▼'} {trend.value}%
          </span>
          <span className="text-slate-400 dark:text-slate-500">{trend.label}</span>
        </div>
      )}
    </div>
  );
};

interface TableHeaderProps {
  children: React.ReactNode;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ children }) => (
  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
    {children}
  </th>
);

interface TableCellProps {
  children: React.ReactNode;
}

export const TableCell: React.FC<TableCellProps> = ({ children }) => (
  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
    {children}
  </td>
);

interface ProgressBarProps {
  progress: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'danger';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  size = 'md',
  color = 'primary'
}) => {
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  const colorClasses = {
    primary: 'bg-primary-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    danger: 'bg-red-600'
  };

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} transition-all duration-500 ease-out`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

interface BadgeProps {
  children: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'gray';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  color = 'primary',
  size = 'md'
}) => {
  const colorClasses = {
    primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm'
  };

  return (
    <span className={`inline-flex items-center font-medium rounded-full ${colorClasses[color]} ${sizeClasses[size]}`}>
      {children}
    </span>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  icon
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    warning: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const widthClasses = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClasses}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-3 py-2 border rounded-lg 
          text-gray-900 dark:text-white 
          bg-white dark:bg-gray-800
          border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          dark:focus:ring-primary-500 dark:focus:border-primary-500
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
          ${className || ''}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{
    value: string | number;
    label: string;
  }>;
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  options,
  className,
  ...props
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <select
        className={`
          w-full px-3 py-2 border rounded-lg 
          text-gray-900 dark:text-white 
          bg-white dark:bg-gray-800
          border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          dark:focus:ring-primary-500 dark:focus:border-primary-500
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
          ${className || ''}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg ${className || ''}`}>
      {children}
    </div>
  );
};