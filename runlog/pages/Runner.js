import styled from 'styled-components';

export default function Runner({ children, run }) {
  return (
    <RunnerStyles>
      <div className="running-button">
        <div className="text">{children}</div>
        <div className="running">
          {run &&
          <div className="outer">
            <div className="body">
              <div className="arm behind"></div>
              <div className="arm front"></div>
              <div className="leg behind"></div>
              <div className="leg front"></div>
            </div>
          </div>
          }
        </div>
      </div>
    </RunnerStyles>
  );
}


const RunnerStyles = styled.div`
  height: 100%;
  width: 100%;
  .running {
    --duration: 0.8s;
    transform: scale(var(--scale, 1));
    .outer {
      animation: outer var(--duration) linear infinite;
      .body {
        background: var(--color);
        height: 15px;
        width: 8px;
        border-radius: 4px;
        transform-origin: 4px 11px;
        position: relative;
        transform: rotate(32deg);
        animation: body var(--duration) linear infinite;
        &:before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 4px;
          bottom: 16px;
          left: 0;
          position: absolute;
          background: var(--color);
        }
        .arm,
        .arm:before,
        .leg,
        .leg:before {
          content: '';
          width: var(--w, 11px);
          height: 4px;
          top: var(--t, 0);
          left: var(--l, 2px);
          border-radius: 2px;
          transform-origin: 2px 2px;
          position: absolute;
          background: var(--c, var(--color));
          transform: rotate(var(--r, 0deg));
          animation: var(--name, arm-leg) var(--duration) linear infinite;
        }
        .arm {
          &:before {
            --l: 7px;
            --name: arm-b;
          }
          &.front {
            --r: 24deg;
            --r-to: 164deg;
            &:before {
              --r: -48deg;
              --r-to: -36deg;
            }
          }
          &.behind {
            --r: 164deg;
            --r-to: 24deg;
            &:before {
              --r: -36deg;
              --r-to: -48deg;
            }
          }
        }
        .leg {
          --w: 12px;
          --t: 11px;
          &:before {
            --t: 0;
            --l: 8px;
          }
          &.front {
            --r: 10deg;
            --r-to: 108deg;
            &:before {
              --r: 18deg;
              --r-to: 76deg;
            }
          }
          &.behind {
            --r: 108deg;
            --r-to: 10deg;
            --c: none;
            &:before {
              --c: var(--color);
              --r: 76deg;
              --r-to: 18deg;
            }
            &:after {
              content: '';
              top: 0;
              right: 0;
              height: 4px;
              width: 6px;
              clip-path: polygon(2px 0, 6px 0, 6px 4px, 0 4px);
              border-radius: 0 2px 2px 0;
              position: absolute;
              background: var(--color);
            }
          }
        }
      }
    }
  }

  .running-button {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
    justify-content: center;
    .text {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: auto;
      margin-bottom: 5px;
    }
    .running {
      --scale: 1;
      --color: MediumVioletRed;
      position: absolute;
      top: 30%;
      right: calc(50%);
      transition: transform 0.4s ease;
      transform: translateX(var(--running-x, -80px)) scale(var(--scale));
    }
    &:hover {
      --default-x: 0px;
      --running-x: 0;
      /* --running-x: var(--padding-x); */
    }
  }

  @keyframes outer {
    50% {
      transform: translateY(0);
    }
    25%,
    75% {
      transform: translateY(4px);
    }
  }

  @keyframes body {
    50% {
      transform: rotate(16deg);
    }
    25%,
    75% {
      transform: rotate(24deg);
    }
  }

  @keyframes arm-leg {
    50% {
      transform: rotate(var(--r-to));
    }
  }

  @keyframes arm-b {
    30%,
    70% {
      transform: rotate(var(--r-to));
    }
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: inherit;
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
`;
